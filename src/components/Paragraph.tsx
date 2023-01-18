interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return (
    <p className="tracking-wide text-gray-600 text-2xl mb-6">{children}</p>
  );
};

export default Paragraph;
