import { useSelector } from "react-redux";

export const useGlobalState = () => {
  const {
    user,
    folders,
    folderSpinner,
    error,
    bookmarks,
    userProfile,
    bookmarkSpinner,
  } = useSelector((state: any) => {
    return {
      user: state.userAuth.user,
      folders: state.folderReducer.folders,
      folderSpinner: state.folderReducer.folderSpinner,
      bookmarks: state.folderReducer.bookmarks,
      bookmarkSpinner: state.folderReducer.bookmarkSpinner,
      userProfile: state.userAuth.userProfile,
      error: state.folderReducer.error,
    };
  });
  return {
    user,
    folders,
    folderSpinner,
    error,
    bookmarks,
    userProfile,
    bookmarkSpinner,
  };
};
