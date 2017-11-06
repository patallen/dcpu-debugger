import React from "react";
import styled from "styled-components";
import CodeLine from "../components/codeline";
import { lines } from "../fake/codes";

import { MenuHead } from "../components/menuhead";
import Section from "../components/sectioncontainer";

const Styled = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 0;
`;

export default class CodeView extends React.Component {
  render() {
    let converted = lines.map(line => <CodeLine {...line} />);
    return (
      <Section
        title="Code"
        minWidth="460px">
        {converted}
      </Section>
    );
  }
}
