import dynamic from "next/dynamic";

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeIcon = dynamic(() => import("./@icons/ExchangeIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
//atoms
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadCircle = dynamic(() => import("./atoms/LoadSpinner"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
const MarqueeTextAnimation = dynamic(() => import("./atoms/MarqueeTextAnimation"));
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const Modal = dynamic(() => import("./molecules/Modal"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./molecules/HeaderContent"));
const Socials = dynamic(() => import("./molecules/Socials"));
const Heading = dynamic(() => import("./molecules/Heading"));
const MaquinaToggleItem = dynamic(() => import("./molecules/MaquinaToggleItem"));
const MaquinaImage = dynamic(() => import("./molecules/MaquinaImage"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const Menu = dynamic(() => import("./organisms/Menu"));
const ImageModal = dynamic(() => import("./organisms/ImageModal"));
const SlimeGraphics = dynamic(() => import("./organisms/SlimeGraphics"));
const SlimeNav = dynamic(() => import("./organisms/SlimeNav"));
const SlimeItem = dynamic(() => import("./organisms/SlimeItem"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const SlimesView = dynamic(() => import("./templates/SlimesView"));
const MaquinaView = dynamic(() => import("./templates/MaquinaView"));
const FamilyView = dynamic(() => import("./templates/FamilyView"));
const AxolotlView = dynamic(() => import("./templates/AxolotlView"));

export {
  PageHead,
  Logo,
  Header,
  Footer,
  PageLayout,
  ArrowIcon,
  NumberInput,
  TextInput,
  CheckBox,
  TwitterIcon,
  DiscordIcon,
  LoadCircle,
  ExpIcon,
  NavItem,
  ExchangeIcon,
  Modal,
  Menu,
  DownloadIcon,
  IconBar,
  SplashScreen,
  LandingView,
  ImageShimmer,
  HeaderContent,
  AboutView,
  ImageModal,
  MenuIcon,
  MarqueeTextAnimation,
  Socials,
  Heading,
  SlimesView,
  MaquinaView,
  FamilyView,
  AxolotlView,
  SlimeGraphics,
  SlimeNav,
  SlimeItem,
  MaquinaToggleItem,
  MaquinaImage
}