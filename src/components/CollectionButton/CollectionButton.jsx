import { memo } from "react";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import CollectionIcon from "../Icon/CollectionIcon.jsx";
import AddIcon from "../Icon/AddIcon.jsx";

const CollectionButton = ({ isActive, onClick }) => {
  return (
    <Button
      variant={isActive ? "secondary" : "primary"}
      isFullWidth
      onClick={onClick}
      icon={isActive ? <CollectionIcon /> : <AddIcon />}
    >
      {isActive ? "In collection" : "Add"}
    </Button>
  );
};

CollectionButton.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
const MemoizedCollectionButton = memo(CollectionButton);
export default MemoizedCollectionButton;
