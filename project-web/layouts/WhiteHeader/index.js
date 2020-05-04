import Container from 'react-bootstrap/Container';

import HeaderWhite from '../../components/HeaderWhite';
import WhiteFooter from '../../components/WhiteFooter';

const WhiteHeader = (props) => {
  const { children, pageTitle } = props;

  return (
    <div>
      <HeaderWhite pageTitle={pageTitle}/>
      <Container fluid className="p-0">
          {children}
      </Container>
      <WhiteFooter/>
    </div>
  );
};

export default WhiteHeader;