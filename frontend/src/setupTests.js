// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "@testing-library/jest-dom";

configure({ adapter: new Adapter() });
