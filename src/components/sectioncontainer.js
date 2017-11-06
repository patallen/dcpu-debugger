import React from "react";

import { theme } from "../constants";
import styled from "styled-components";

const Triangle = ({ rotation, width}) => {
  let style = {width:`${width}px`, height:`${width}px`, marginRight: "6px"};
  return <svg transform={`rotate(${rotation})`}
    style={style}
    viewBox="0 0 100 100"
    points="0 100, 100 100, 100 0"
    xmlns="http://www.w3.org/2000/svg">
    <polygon  fill="white" points="0 100, 100 100, 100 0" />
  </svg>;
}

const Header = styled.div`
  color: ${theme.plaintext};
  background: ${theme.highlight};
  min-height: ${theme.section.headerHeight};
  max-height: ${theme.section.headerHeight};
  border-top: 1px solid ${theme.outline};
  text-transform: uppercase;
  align-items: center;
  padding-left: 1em;
  font-size: 1.1em;
  cursor: pointer;
  display: flex;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: bottom;
  align-items: center;
  flex-direction: column;
  min-width: ${props => props.minWidth};
  overflow: hidden;
  width: 100%;
`;

const CollapseIndicator = ({collapsed}) => {
  let degrees = collapsed ? -45 : 0;
  return <Triangle rotation={degrees} width={8} />
}

class CollapseHeader extends React.Component {
  render() {
    let { callback, collapsed, title } = this.props;
    return (
      <Header onClick={callback}>
        <CollapseIndicator collapsed={collapsed}/>{title}
      </Header>
    );
  }
}

class Contents extends React.Component {
  constructor(props) {
    super(props);
    let { initialHeight } = this.props;
    this.state = { height: initialHeight };
  }
  render() {
    let style = {
      maxHeight: this.props.collapsed ? "0" : `${this.state.height}px`,
      transition: ".1s",
      overflowY: "auto",
      width: "100%"
    };
    return <div style={style}>{this.props.children}</div>;
  }
}
export class SectionCollapsable extends React.Component {
  constructor(props) {
    super(props);
    let { minWidth, title } = props;

    this.state = { collapsed: false };
  }

  handleCollapse() {
    let collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    let { title, minWidth } = this.props;
    let collapsed = this.state.collapsed;

    return (
      <Container minWidth={minWidth}>
        <CollapseHeader
          collapsed={collapsed}
          callback={() => this.handleCollapse()}
          title={title}
        />
        <Contents collapsed={collapsed} initialHeight={300}>
          {this.props.children}
        </Contents>
      </Container>
    );
  }
}

export default class Section extends React.Component {
  constructor({ initialHeight }) {
    super();
    this.state = { height: initialHeight };
  }

  render() {
    let { title, minWidth } = this.props;
    minWidth = minWidth || "unset";
    return (
      <Container minWidth={minWidth}>
        <Header>{title}</Header>
        <Contents> {this.props.children} </Contents>
      </Container>
    );
  }
}
