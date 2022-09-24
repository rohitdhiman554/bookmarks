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

export type AllFoldersState = {
  name: string;
  id: string;
  createdAt: any;
}[];

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
export type folderReducerActions =
  | CreateFolderSuccess
  | CreateFolderFailure
  | AllFoldersSuccess
  | AllFoldersFailure
  | RenameFolderFailure
  | RenameFolderSuccess
  | DeleteFolderSuccess
  | DeleteFolderFailure;
