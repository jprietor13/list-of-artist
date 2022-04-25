import { React } from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { AlbumsByArtists } from '../../components/AlbumsByArtists'
import { useGetAlbumsByArtist } from "../../hooks/useGetAlbumsByArtist";

jest.mock("../../hooks/useGetAlbumsByArtist");

describe("Pruebas en <ListOfArtists />", () => {
  configure({ adapter: new Adapter() });

  test("Debe cargarse correctamente", () => {
    useGetAlbumsByArtist.mockReturnValue([]);
    const wrapper = shallow(<AlbumsByArtists />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la informacion", () => {
    useGetAlbumsByArtist.mockReturnValue([
      {
        name: "Do I Wanna Know",
      },
    ])
    const wrapper = shallow(<AlbumsByArtists />);
    
    expect(wrapper.find("p").text().trim()).toBe("Do I Wanna Know");
  });
});