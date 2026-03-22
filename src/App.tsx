import { useApp } from '@/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import Home from '@/pages/Home';
import Properties from '@/pages/Properties';
import Detail from '@/pages/Detail';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Newsletter from '@/pages/Newsletter';
import Contact from '@/pages/Contact';

function PageContent() {
  const { nav } = useApp();

  switch (nav.page) {
    case 'home':       return <Home />;
    case 'properties': return <Properties />;
    case 'detail':     return <Detail />;
    case 'services':   return <Services />;
    case 'about':      return <About />;
    case 'newsletter': return <Newsletter />;
    case 'contact':    return <Contact />;
    default:           return <Home />;
  }
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <PageContent />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
