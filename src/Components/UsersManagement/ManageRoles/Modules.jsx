import SelectArrowDownIcon from "Assets/icons/selectarrowdown.svg";
import {Checkbox, Tree} from "antd";
import {useState} from "react";
import {RolesTreeData} from "./../../../Constants/Roles";

const Modules = ({checkedKeys, setCheckedKeys}) => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(true);
  };

  const onCheck = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };

  const onSelect = (selectedKeysValue, info) => {
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <div className='mb-15'>
      <Tree
        className='primary-tree'
        checkable
        defaultExpandAll
        onExpand={onExpand}
        // expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        onCheck={onCheck}
        checkedKeys={checkedKeys}
        onSelect={onSelect}
        selectedKeys={selectedKeys}
        defaultSelectedKeys={[""]}
        treeData={RolesTreeData}
        switcherIcon={<img src={SelectArrowDownIcon} alt='' />}
      />
    </div>
  );
};

export default Modules;
