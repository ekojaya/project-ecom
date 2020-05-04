import { 
  Button
} from 'reactstrap';
import WhiteHeader from '../../layouts/WhiteHeader';

const ErrorContent = ({ message }) => {
  return (
    <WhiteHeader pageTitle="vici | Error 404">
       <section className="space--sm bg--about d-flex align-items-start justify-content-center mbn8"
        style={{backgroundImage:`url('/static/image/404.png')`}}
       >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1 className="worksans deotrans-lg color-red vici700 mb10">404</h1>
                <p className=" deotrans-p mb30 text-center"> 
                  The page you were looking for appear to have been moved, 
                  deleted or does not exist
                </p>
                <Button 
                  className="btn btn-headercontact-white mb0"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
      </section>
    </WhiteHeader>
  );
}

export default ErrorContent;