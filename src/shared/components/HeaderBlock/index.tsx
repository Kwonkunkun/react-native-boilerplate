import React, { ReactElement } from "react";
import styled from "styled-components/native";

import { useCustomNavigation, useStatusBar } from "hooks";
import Margin from "@shared-components/Margin";
import Icon from "react-native-dynamic-vector-icons";
import RNBounceable from "@freakycoder/react-native-bounceable";
import colors from "@colors";

type HeaderBlockProps = {
  isHaveBackButton?: boolean;
  leftComponent?: ReactElement;
  middleComponent?: ReactElement;
  rightComponent?: ReactElement;
};

const HeaderBlock = ({
  isHaveBackButton,
  leftComponent,
  middleComponent,
  rightComponent,
}: HeaderBlockProps) => {
  const { height: statusBarHeight } = useStatusBar();
  const navigation = useCustomNavigation();

  const onPressBackButton = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const BackButton = () => (
    <RNBounceable onPress={onPressBackButton}>
      <Icon name="menu" type="Ionicons" color={colors.iconWhite} size={30} />
    </RNBounceable>
  );

  return (
    <>
      <Margin mb={10 + statusBarHeight} />
      <Container>
        <LeftBox>
          <Margin mr={12} />
          {isHaveBackButton && <BackButton />}
          {leftComponent}
        </LeftBox>
        <MiddleBox>{middleComponent}</MiddleBox>
        <RightBox>
          {rightComponent}
          <Margin mr={12} />
        </RightBox>
      </Container>
    </>
  );
};

const Container = styled.View({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0px",
});

const LeftBox = styled.View({
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
});

const MiddleBox = styled.View({
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

const RightBox = styled.View({
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
});

export default HeaderBlock;
