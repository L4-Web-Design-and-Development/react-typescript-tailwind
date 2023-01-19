interface LinkProps {
  children: React.ReactNode;
  url: string;
}

const Link = ({ children, url }: LinkProps) => {
  return (
    <a className="text-blue-500 hover:text-blue-700 underline" href={url}>
      {children}
    </a>
  );
};

export default Link;
