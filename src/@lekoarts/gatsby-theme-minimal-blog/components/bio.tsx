import * as React from "react";
import { Flex, Box } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";
// @ts-ignore
import DaikuBio from "../texts/bio/daiku";
// @ts-ignore
import PierBio from "../texts/bio/pier";

const Bios = {
    daiku: {
        image: (
            <StaticImage
                width={120}
                height={120}
                style={{ borderRadius: "100%" }}
                alt="Profile picture of Daiku"
                src="../texts/bio/daiku/img.jpg"
            />
        ),
        text: <DaikuBio />,
    },
    pier: {
        image: (
            <StaticImage
                width={120}
                height={120}
                style={{ borderRadius: "100%" }}
                alt="Profile picture of Pier"
                src={"../texts/bio/pier/img.jpg"}
            />
        ),
        text: <PierBio />,
    },
};

const Bio = ({ author }) => {
    return (
        Bios[author] && (
            <Flex>
                <Box sx={{ minWidth: 130, margin: "20px 0" }}>
                    {Bios[author].image}
                </Box>
                <Box>{Bios[author].text}</Box>
            </Flex>
        )
    );
};

export default Bio;
