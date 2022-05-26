import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const useSwal = () => {
  return MySwal;
};

export default useSwal;
