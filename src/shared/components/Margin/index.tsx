import React from "react";
import styled from "styled-components/native";

type MarginTypes = {
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
};

type ContainerTypes = {
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
};

const Container = styled.View(({ mt, mb, ml, mr }: ContainerTypes) => ({
  marginTop: mt ? mt : 0,
  marginLeft: ml ? ml : 0,
  marginBottom: mb ? mb : 0,
  marginRight: mr ? mr : 0,
}));

export default function Margin({ mt, mb, ml, mr }: MarginTypes) {
  return <Container mt={mt} mb={mb} ml={ml} mr={mr} />;
}
