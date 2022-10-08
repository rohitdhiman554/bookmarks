import { type } from "os";

export type UserState = {
  name: string;
  email: string;
  id: string;
  createAt: string;
  updatedAt: string;
  deletedAt: string;
  isEmailVerified: string;
};

export type FolderState = {
  id: string;
  name: string;
  user: UserState;
  createdAt: any;
  updatedAt: string;
  deletedAt: string;
};

export type AllFoldersState = {
  name: string;
  id: string;
  createdAt: any;
}[];

export type CreateFolderRequest = {
  type: "CREATE_FOLDER_REQUEST";
  payload: {
    folder: FolderState;
  };
};

export type CreateFolderSuccess = {
  type: "CREATE_FOLDER_SUCCESS";
  payload: {
    folder: FolderState;
  };
};

export type CreateFolderFailure = {
  type: "CREATE_FOLDER_FAILURE";
  payload: {
    error: string;
  };
};

export type AllFoldersRequest = {
  type: "GET_ALL_FOLDERS_REQUEST";
  payload: {
    error: any;
    folders: AllFoldersState;
  };
};

export type AllFoldersSuccess = {
  type: "GET_ALL_FOLDERS_SUCCESS";
  payload: {
    error: any;
    folders: AllFoldersState;
  };
};

export type AllFoldersFailure = {
  type: "GET_ALL_FOLDERS_FAILURE";
  payload: {
    error: any;
  };
};

export type RenameFolderRequest = {
  type: "RENAME_FOLDER_REQUEST";
  response: any;
};

export type RenameFolderSuccess = {
  type: "RENAME_FOLDER_SUCCESS";
  response: any;
  // payload: {
  //   folderId: string;
  //   name: string;
  // };
};
export type RenameFolderFailure = {
  type: "RENAME_FOLDER_FAILURE";
  payload: {
    error: any;
  };
};

export type DeleteFolderSuccess = {
  type: "DELETE_FOLDER_SUCCESS";
  payload: {
    folderId: string;
  };
};
export type DeleteFolderFailure = {
  type: "DELETE_FOLDER_FAILURE";
  payload: {
    error: any;
  };
};

export type CreateBookmarkRequest = {
  type: "CREATE_BOOKMARKS_REQUEST";
  payload: {
    url: string;
    bookmarkName: string;
  };
};

export type CreateBookmarkSuccess = {
  type: "CREATE_BOOKMARKS_SUCCESS";
  payload: {
    response: any;
  };
};

export type CreateBookmarkFailure = {
  type: "CREATE_BOOKMARKS_FAILURE";
};

export type GetBookMarkRequest = {
  type: "GET_BOOKMARK_REQUEST";
  payload: {
    id: string;
    name: string;
  };
};

export type GetBookmarkSuccess = {
  type: "GET_BOOKMARK_SUCCESS";
  payload: {
    imageUrl: string;
    isFavorite: boolean;
    name: string;
    url: string;
  };
};

export type GetBookmarkFailure = {
  type: "GET_BOOKMARK_FAILURE";
  payload: any;
};

export type DeleteBookmarkSuccess = {
  type: "DELETE_BOOKMARKS_SUCCESS";
  payload: {
    id: string;
  };
};

export type SearchFolder = {
  type: "SEARCH_FOLDER";
  payload: {
    name: string;
  };
};

export type FavoriteSuccess = {
  type: "FAVORITE_SUCCESS";
  payload: {
    response: {
      id: string;
      isFavorite: string;
    };
  };
};

export type AddToFavorite = {
  type: "ADD_TO_FAVORITE";
  payload: {
    bookmark: [];
  };
};

export type RemoveFromFavorite = {
  type: "REMOVE_FROM_FAVORITE";
  payload: {
    id: string;
  };
};

export type ShowFavorite = {
  type: "SHOW_FAVORITE";
};

export type MoveBookmarkRequest = {
  type: "MOVE_BOOKMARK_REQUEST";
};

export type MoveBookmarkSuccess = {
  type: "MOVE_BOOKMARK_SUCCESS";
  payload: {
    id: string;
  };
};

export type MoveBookmarkFailure = {
  type: "MOVE_BOOKMARK_FAILURE";
  payload: {
    error: any;
  };
};

export type DeleteFolderRequest = {
  type: "DELETE_FOLDER_REQUEST";
  payload: {
    folderId: string;
  };
};

export type DeleteBookmarkRequest = {
  type: "DELETE_BOOKMARKS_REQUEST";
};

export type DeleteBookmarkFailure = {
  type: "DELETE_BOOKMARKS_FAILURE";
  payload: {
    error: any;
  };
};

export type FavoriteRequest = {
  type: "FAVORITE_REQUEST";
  payload: {
    id: string;
  };
};

export type FavoriteFailure = {
  type: "FAVORITE_FAILURE";
};

export type Toggleview = {
  type: "TOGGLE_VIEW";
};
export type folderReducerActions =
  | CreateFolderRequest
  | CreateFolderSuccess
  | CreateFolderFailure
  | AllFoldersSuccess
  | AllFoldersFailure
  | AllFoldersRequest
  | RenameFolderFailure
  | RenameFolderSuccess
  | DeleteFolderSuccess
  | DeleteFolderFailure
  | DeleteFolderRequest
  | CreateBookmarkRequest
  | CreateBookmarkSuccess
  | GetBookMarkRequest
  | GetBookmarkSuccess
  | DeleteBookmarkSuccess
  | SearchFolder
  | FavoriteSuccess
  | AddToFavorite
  | RemoveFromFavorite
  | ShowFavorite
  | MoveBookmarkRequest
  | MoveBookmarkSuccess
  | RenameFolderRequest
  | GetBookmarkFailure
  | MoveBookmarkRequest
  | MoveBookmarkFailure
  | DeleteBookmarkRequest
  | DeleteBookmarkFailure
  | FavoriteRequest
  | Toggleview
  | FavoriteFailure
  | CreateBookmarkFailure;
