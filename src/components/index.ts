import dynamic from "next/dynamic";

//icons
const ArrowIcon = dynamic(() => import("./@icons/ArrowIcon"));
const TwitterIcon = dynamic(() => import("./@icons/TwitterIcon"));
const DiscordIcon = dynamic(() => import("./@icons/DiscordIcon"));
const ExpIcon = dynamic(() => import("./@icons/ExpIcon"));
const ExchangeIcon = dynamic(() => import("./@icons/ExchangeIcon"));
const DownloadIcon = dynamic(() => import("./@icons/DownloadIcon"));
const MenuIcon = dynamic(() => import("./@icons/MenuIcon"));
const AxolotlPattern = dynamic(() => import("./@icons/AxolotlPattern"));
const InstagramIcon = dynamic(() => import("./@icons/InstagramIcon"));
//testing
//atoms
const NumberInput = dynamic(() => import("./atoms/NumberInput"));
const TextInput = dynamic(() => import("./atoms/TextInput"));
const CheckBox = dynamic(() => import("./atoms/CheckBox"));
const LoadCircle = dynamic(() => import("./atoms/LoadSpinner"));
const ImageShimmer = dynamic(() => import("./atoms/ImageShimmer"));
const Logo = dynamic(() => import("./atoms/Logo"));
const MarqueeTextAnimation = dynamic(
  () => import("./atoms/MarqueeTextAnimation")
);
//molecules
const PageHead = dynamic(() => import("./molecules/PageHead"));
const NavItem = dynamic(() => import("./molecules/NavItem"));
const Modal = dynamic(() => import("./molecules/Modal"));
const IconBar = dynamic(() => import("./molecules/IconBar"));
const SplashScreen = dynamic(() => import("./molecules/SplashScreen"));
const HeaderContent = dynamic(() => import("./molecules/HeaderContent"));
const Socials = dynamic(() => import("./molecules/Socials"));
const Heading = dynamic(() => import("./molecules/Heading"));
const ToggleItem = dynamic(() => import("./molecules/ToggleItem"));
const MaquinaImage = dynamic(() => import("./molecules/MaquinaImage"));
const WorldToggleItem = dynamic(() => import("./molecules/WorldToggleItem"));
const ImageBar = dynamic(() => import("./molecules/ImageBar"));
const AnimateWrapper = dynamic(() => import("./molecules/AnimateWrapper"));
const GalleryItem = dynamic(() => import("./molecules/GalleryItem"));
const SlimeGraphicsItem = dynamic(
  () => import("./molecules/SlimeGraphicsItem")
);
const SlimesStudioToggleLayout = dynamic(
  () => import("./molecules/SlimesStudioToggleLayout")
);
const FactionBlock = dynamic(() => import("./molecules/FactionBlock"));
//organisms
const Header = dynamic(() => import("./organisms/Header"));
const Footer = dynamic(() => import("./organisms/Footer"));
const Menu = dynamic(() => import("./organisms/Menu"));
const ImageModal = dynamic(() => import("./organisms/ImageModal"));
const SlimeGraphics = dynamic(() => import("./organisms/SlimeGraphics"));
const SlimeNav = dynamic(() => import("./organisms/SlimeNav"));
const SlimeItem = dynamic(() => import("./organisms/SlimeItem"));
const MaquinaCharacters = dynamic(
  () => import("./organisms/MaquinaCharacters")
);
const MaquinaCollaborations = dynamic(
  () => import("./organisms/MaquinaCollaborations")
);
const MaquinaBranding = dynamic(() => import("./organisms/MaquinaBranding"));
const Gallery = dynamic(() => import("./organisms/Gallery"));
const DropdownItem = dynamic(() => import("./organisms/DropdownItem"));
const Toggle = dynamic(() => import("./organisms/Toggle"));
const CyberFrogsBranding = dynamic(
  () => import("./organisms/CyberFrogsBranding")
);
const CyberFrogsArt = dynamic(() => import("./organisms/CyberFrogsArt"));
const CyberFrogsWebsite = dynamic(
  () => import("./organisms/CyberFrogsWebsite")
);
const PortalsSystems = dynamic(() => import("./organisms/PortalsSystems"));
const PortalsArt = dynamic(() => import("./organisms/PortalsArt"));
const PortalsFactions = dynamic(() => import("./organisms/PortalsFactions"));
//templates
const PageLayout = dynamic(() => import("./templates/PageLayout"));
const LandingView = dynamic(() => import("./templates/LandingView"));
const AboutView = dynamic(() => import("./templates/AboutView"));
const SlimesView = dynamic(() => import("./templates/SlimesView"));
const SlimesItemView = dynamic(() => import("./templates/SlimesItemView"));
const MaquinaView = dynamic(() => import("./templates/MaquinaView"));
const FamilyView = dynamic(() => import("./templates/FamilyView"));
const AxolotlView = dynamic(() => import("./templates/AxolotlView"));
const SlimesStudioView = dynamic(() => import("./templates/SlimesStudioView"));
const SlimesStudioItemView = dynamic(
  () => import("./templates/SlimesStudioItemView")
);
const BrandKitView = dynamic(() => import("./templates/BrandKitView"));

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
  ToggleItem,
  MaquinaImage,
  WorldToggleItem,
  ImageBar,
  MaquinaCharacters,
  MaquinaCollaborations,
  MaquinaBranding,
  AxolotlPattern,
  AnimateWrapper,
  Gallery,
  GalleryItem,
  SlimeGraphicsItem,
  DropdownItem,
  SlimesStudioView,
  SlimesItemView,
  SlimesStudioItemView,
  Toggle,
  CyberFrogsArt,
  CyberFrogsBranding,
  CyberFrogsWebsite,
  SlimesStudioToggleLayout,
  BrandKitView,
  PortalsSystems,
  PortalsArt,
  PortalsFactions,
  FactionBlock,
  InstagramIcon,
};
