import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import Sections from './_components/Sections';

export default function Home() {
  return (
    <div className={'space-y-12'}>
      <Navbar />
      <Sections>Section 1</Sections>
      <Sections>Section 2</Sections>
      <Sections>Section 3</Sections>
      <Sections>Section 4</Sections>
      <Sections>Section 5</Sections>
      <Sections>Section 6</Sections>
      <Footer />
    </div>
  );
}
