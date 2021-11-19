/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx } from 'theme-ui'
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes'
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata'
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config'
import logo from '../../../../static/logo.svg'

import { Flex, Box } from 'theme-ui'

const HeaderTitle = () => {
    const { siteTitle } = useSiteMetadata()
    const { basePath } = useMinimalBlogConfig()

    return (
        <Link
            to={replaceSlashes(`/${basePath}`)}
            aria-label={`${siteTitle} - Back to home`}
            sx={{ color: `heading`, textDecoration: `none` }}
        >
            <div sx={{ my: 0, fontWeight: `medium`, fontSize: [3, 4] }}>
                <Flex>
                    <Box p={2} sx={{ flex: '1 1 auto' }}>
                        <img src={logo} alt="React Logo" />
                    </Box>
                    <Box p={2} sx={{ flex: '1 1 auto' }}>
                        Stories
                    </Box>
                </Flex>
            </div>
        </Link>
    )
}

export default HeaderTitle
