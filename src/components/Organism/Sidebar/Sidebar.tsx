import IconButton from "@/components/Atoms/IconButton";
import useAccountQuery from "@/hooks/useAccountQuery";
import { useIsExpandedStore, useSelectSectionStore, useSelectTopButtonStore } from "@/store/selectSectionStore";
import ExpandedSidebar from "../ExpandedSidebar";
import FoldSidebar from "../FoldSidebar/FoldSidebar";

const Sidebar = () => {
  const {data} = useAccountQuery();
  const {isExpanded, setIsExpanded} = useIsExpandedStore();
  const {selectTopButton,setSelectTopButton} = useSelectTopButtonStore();
  const {selectSection, setSelectSection} = useSelectSectionStore();
  const handleClickMail = () => window.electron.ipcRenderer.send('open-mailbox');
  const handleSectionChange = (id:string, isTopButton = false) => {
    if (isTopButton) {
      setSelectTopButton(id);
      setSelectSection("");
    } else {
      setSelectSection(id);
      setSelectTopButton("");
    }
  };
  return (
    <>
      <IconButton id="hamburger" onClick={()=>{setIsExpanded(!isExpanded)}} isActive={isExpanded===true}/>
      {
        isExpanded == false ? (
          <FoldSidebar
            data={data}
            handleClickMail={handleClickMail}
            handleSectionChange={handleSectionChange}
            selectSection={selectSection}
            selectTopButton={selectTopButton}
          />
        ):(
          <ExpandedSidebar 
            isExpanded={isExpanded}
            selectTopButton={selectTopButton}
            selectSection={selectSection}
            handleSectionChange={handleSectionChange}
            data={data}
          />
        )
      }      
    </>
  );
};


export default Sidebar;

