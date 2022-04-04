import React, { FC, useContext } from "react";
import { View } from "react-native";
import { Link, useRouteMatch } from "react-router-dom";

import { HEADER_WIDTH, IS_DESKTOP, Spacing, SUB_MENU_HEIGHT } from "../../constants/dimension";
import { GlobalContext } from "../../context/GlobalContext";
import useColors from "../../hooks/useColors";
import useTranslation from "../../hooks/useTranslation";
import FlexView from "../FlexView";
import Text from "../Text";

export interface WebSubMenuItem {
    title: string;
    path: string;
}

export interface WebSubMenuProps {
    items: WebSubMenuItem[];
}
export const HomeSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("total-value"),
                    path: "/"
                }
            ]}
        />
    );
};

export const AmmSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("new-order"),
                    path: "/swap"
                },
                {
                    title: t("add-liquidity"),
                    path: "/liquidity"
                },
                {
                    title: t("remove-liquidity"),
                    path: "/liquidity/remove"
                }
            ]}
        />
    );
};

export const MigrateSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("migrate"),
                    path: "/migrate"
                },
                {
                    title: t("migrate-liquidity"),
                    path: "/migrate/lp"
                }
            ]}
        />
    );
};

export const AirdropsSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("airdrops"),
                    path: "/airdrops"
                },
                {
                    title: t("levx-distribution"),
                    path: "/airdrops/levx"
                }
            ]}
        />
    );
};

export const ZeroSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("claim-zero"),
                    path: "/zero/claim"
                }
            ]}
        />
    );
};

export const StakingSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("stake"),
                    path: "/staking"
                },
                {
                    title: t("unstake"),
                    path: "/staking/unstake"
                }
            ]}
        />
    );
};

export const FarmingSubMenu = () => {
    const t = useTranslation();
    return (
        <WebSubMenu
            items={[
                {
                    title: t("plant-lp-tokens"),
                    path: "/farming"
                },
                {
                    title: t("harvest-sushi"),
                    path: "/farming/harvest"
                }
            ]}
        />
    );
};

const WebSubMenu: FC<WebSubMenuProps> = props => {
    const { submenu } = useColors();
    return (
        <View
            style={{
                position: "absolute",
                top: 0,
                height: SUB_MENU_HEIGHT,
                width: "100%",
                backgroundColor: submenu
            }}>
            <FlexView
                style={{
                    width: IS_DESKTOP ? HEADER_WIDTH : "100%",
                    marginTop: 2,
                    paddingHorizontal: Spacing.normal,
                    alignSelf: "center",
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}>
                {props.items.map(item => (
                    <MenuItem key={item.path} {...item} />
                ))}
            </FlexView>
        </View>
    );
};

const MenuItem = ({ title, path }) => {
    const { darkMode } = useContext(GlobalContext);
    const { accent, textLight } = useColors(!darkMode);
    const match = useRouteMatch(path);
    const active = match?.isExact;
    return (
        <Link
            to={path}
            style={{
                marginLeft: Spacing.small,
                paddingTop: Spacing.tiny,
                paddingBottom: Spacing.tiny,
                textDecoration: "none"
            }}>
            <Text
                fontWeight={active ? "regular" : "light"}
                style={{
                    fontSize: 13,
                    color: active ? accent : textLight
                }}>
                {title}
            </Text>
        </Link>
    );
};

export default WebSubMenu;
