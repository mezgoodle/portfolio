interface LinkProps {
  link: {
    id: number;
    name: string;
    url: string;
  };
}
const LinkComponent: React.FC<LinkProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-primary"
    >
      {link.name}
    </a>
  );
};

export default LinkComponent;
