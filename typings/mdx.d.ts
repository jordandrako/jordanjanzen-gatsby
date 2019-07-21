declare module 'mdx.macro' {
  export function importMDX(
    path: string
  ): Promise<{ default: React.LazyExoticComponent<any> }>;
}

declare module '*.mdx' {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
