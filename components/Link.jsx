const LinkComponent = ({ link }) => {
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
