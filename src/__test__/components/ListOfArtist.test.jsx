import { React } from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { ListOfArtists } from "../../components/ListOfArtists";
import { useGetListOfArtists } from "../../hooks/useGetListOfArtists";

jest.mock("../../hooks/useGetListOfArtists");

describe("Pruebas en <ListOfArtists />", () => {
  configure({ adapter: new Adapter() });

  test("Debe cargarse correctamente", () => {
    useGetListOfArtists.mockReturnValue([]);
    const wrapper = shallow(<ListOfArtists />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la informacion", () => {
    useGetListOfArtists.mockReturnValue([
      {
        name: "Artic Monkeys",
      },
    ])
    const wrapper = shallow(<ListOfArtists />);
    
    expect(wrapper.find("p").text().trim()).toBe("Artic Monkeys");
  });
});
