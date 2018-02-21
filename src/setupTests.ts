import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

// https://stackoverflow.com/questions/46435558/could-not-find-declaration-file-for-enzyme-adapter-react-16
(enzyme as any).configure({ adapter: new Adapter() });