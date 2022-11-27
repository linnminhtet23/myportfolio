import PropTypes from "prop-types";
import AppContainer from "../atomics/AppContainer";
import AppHead from "../atomics/AppHead";
import AppNav from "../molecules/AppNav";
import AppSide from "../atomics/AppSide";
import AppSignature from "../organisms/AppSignature";
import AppCtaSection from "../molecules/AppCtaSection";
import AppHero from "../molecules/AppHero";
import AppFooter from "../atomics/AppFooter";
import Visitors from "../molecules/Visitors";


function AppShell({ title, keyword, description, hero, cta, children }) {
 
  return (
    <>
      <AppHead title={title} description={description} keyword={keyword} />
      <AppNav />
      <AppSide />
      {/* <Visitors visitors={visitors} /> */}
      {hero && <AppHero />}
      <AppContainer>
        {children}
        <AppSignature />
        {cta && <AppCtaSection />}
        <AppFooter />
      </AppContainer>
    </>
  );
}

AppShell.propTypes = {
  title: PropTypes.string,
  keyword: PropTypes.string,
  description: PropTypes.string,
  hero: PropTypes.bool,
  cta: PropTypes.bool,
};

AppShell.defaultProps = {
  title: "Linn Min Htet",
  description:
    "I am a student from Indonesia, who focuses on web development, especially frontend web development.",
  keyword: "",
  hero: false,
  cta: true,
};

export default AppShell;
