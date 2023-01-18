interface ListItemProps {
  children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return (
    <li className="tracking-wide text-gray-800 text-lg text-2xl leading-relaxed list-decimal">
      {children}
    </li>
  );
};

export default ListItem;
