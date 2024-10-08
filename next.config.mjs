import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withMDX = createMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
    },
})

export default withMDX(nextConfig);
