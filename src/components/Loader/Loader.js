import { TailSpin } from "react-loader-spinner";
import { LoaderWrapper, LoaderContent } from "./Loader.styles";

function Loader() {
  return (
    <LoaderWrapper>
      <LoaderContent>
        <TailSpin color="#78a5a3" height={100} width={100} />
      </LoaderContent>
    </LoaderWrapper>
  );
}

export default Loader;
