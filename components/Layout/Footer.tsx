import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import React from "react";

import { Flex, Link, Text } from "@chakra-ui/layout";

const Wrapper = dynamic(() => import("@components/Layout/Wrapper"));
const Container = dynamic(() => import("@components/Layout/Container"));
const LogoWakeLab = dynamic(() => import("@components/Logos/LogoWakeLab"));

const Footer = () => {
  const { t } = useTranslation("common");
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <Wrapper as="footer" className="Footer__wrapper" paddingBottom="10">
        <Container className="Footer__container">
          <Flex
            gridColumnStart={{ base: "1", lg: "1" }}
            gridColumnEnd={{ base: "13", lg: "5" }}
            paddingX="colPadding"
            alignItems="flex-end"
            gap="5"
          >
            <Text textStyle="caption" marginBottom="0">
              {`© 2019 - ${year}. ${t("copyright")}`}
            </Text>
          </Flex>

          <Flex
            gridColumnStart={{ base: "1", lg: "5" }}
            gridColumnEnd={{ base: "13", lg: "13" }}
            paddingX="colPadding"
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "flex-start", lg: "flex-end" }}
            alignItems={{ base: "flex-start", sm: "flex-end" }}
            gap="6"
            marginTop={{ base: "6", lg: "0" }}
          >
            <Flex
              as={Link}
              href="https://wakelabstudio.ru"
              isExternal
              variant="caption"
              width="fit-content"
              gap="3"
              direction="row"
              alignItems="baseline"
            >
              {t("desDev")}
              <LogoWakeLab width="91px" height="32px" />
            </Flex>
          </Flex>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
