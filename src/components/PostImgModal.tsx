import "../assets/styles/PostImgModal.scss";
import { GrFormClose } from "react-icons/gr";
import { PostType } from "../types/postTypes";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ModalProp = {
  post: PostType;
  setShowPostImgModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostImgModal = ({ post, setShowPostImgModal }: ModalProp) => {
  console.log({ post });

  return (
    <div className="post_image_modal">
      <div className="post_image_modal_card">
        <LazyLoadImage src={post.media} alt="" />

        <button
          className="close_post_image_modal"
          onClick={() => setShowPostImgModal(false)}
        >
          <GrFormClose />
        </button>
      </div>
    </div>
  );
};

export default PostImgModal;
