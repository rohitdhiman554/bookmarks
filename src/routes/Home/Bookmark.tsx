import { useState } from "react";
import { connect } from "react-redux";

import { Dispatch } from "redux";
import {
  createBookmarksRequest,
  deleteBookmarkRequest,
} from "../../store/actions";
import QuickLinkImg from "../../components/assets/quickLink.svg";
import { QuickLinkButton } from "../../components/Button";
import {
  QuickLink,
  QuickLinkDiv1,
  HeadingDiv,
  UrlDiv,
  UrlInput,
  QuickLinkButtonsDiv,
  FolderNameInput,
  QuickLinkDiv2,
} from "./style";

type BookmarksType = {
  createBookmark: (obj: any) => void;
  folder?: string;
};

const Bookmark = (props: BookmarksType) => {
  const [url, setUrl] = useState("");

  const addUrl = (e: any) => {
    setUrl(e.target.value);
  };

  const handleBookmark = () => {
    let obj = {
      url: url,
      name: props.folder,
    };
    setUrl("");
    props.createBookmark(obj);
  };

  return (
    <>
      <QuickLink>
        <QuickLinkDiv1>
          <HeadingDiv id="quicklink">Add Quick Link</HeadingDiv>
          <p
            style={{
              color: "white",
              margin: "3% 0 0 5%",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.89em",
            }}
          >
            URL
          </p>
          <UrlDiv>
            <UrlInput
              type="text"
              placeholder="url"
              onChange={addUrl}
            ></UrlInput>
          </UrlDiv>
          <p
            style={{
              color: "white",
              margin: "4% 0 0 5%",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.89em",
            }}
          >
            FOLDER
          </p>

          <QuickLinkButtonsDiv>
            <FolderNameInput
              type="text"
              id="rootBtn"
              value={props.folder != "" ? props.folder : ""}
            ></FolderNameInput>
            <QuickLinkButton id="saveBtn" onClick={handleBookmark}>
              Save
            </QuickLinkButton>
          </QuickLinkButtonsDiv>
        </QuickLinkDiv1>

        <QuickLinkDiv2>
          <img src={QuickLinkImg} width={300} height={300} />
        </QuickLinkDiv2>
      </QuickLink>
    </>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createBookmark: (obj: any) => dispatch(createBookmarksRequest(obj)),
    // deleteBookmark: (id: any) => dispatch(deleteBookmarkRequest(id)),
  };
};

export default connect(null, mapDispatchToProps)(Bookmark);
