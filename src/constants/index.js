import { client1, client2, client3, client4, client5, client6, client7, club, clubGroup, event, payment, member, membership, nationalAssociations, customer1, customer2, customer3, customer4, customer5, customer6, blog1, blog2, blog3, instagram, twitter, youtube } from '../assets';

export const navLinks = [
  {
    id: "home",
    title: "Home",
  }, {
    id: "service",
    title: "Service",
  }, {
    id: "feature",
    title: "Feature",
  }, {
    id: "product",
    title: "Product",
  }, {
    id: "testimonial",
    title: "Testimonial",
  }, {
    id: "faq",
    title: "FAQ",
  }
]

export const navButtons = [
  {
    id: "login",
    title: "Login",
    style: "text-green-600"
  }, {
    id: "signup",
    title: "Sign Up",
    style: "bg-green-600 text-white"
  }
]

export const clients = [
  {
    id: "client1",
    logo: client1,
  }, {
    id: "client2",
    logo: client2,
  }, {
    id: "client3",
    logo: client3,
  }, {
    id: "client4",
    logo: client4,
  }, {
    id: "client5",
    logo: client5,
  }, {
    id: "client6",
    logo: client6,
  }, {
    id: "client7",
    logo: client7,
  }
]

export const community = [
  {
    id: "membership",
    icon: membership,
    title: "Membership Organization",
    description: "Our membership management software provides full automation of membership renewals and payments"
  }, {
    id: "national-associations",
    icon: nationalAssociations,
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments"
  }, {
    id: "club-group",
    icon: clubGroup,
    title: "Club",
    description: "Our membership management software provides full automation of membership renewals and payments"
  }
]

export const stats = [
  {
    id: "members",
    icon: member,
    value: "2,245,431",
    title: "Members"
  }, {
    id: "clubs",
    icon: club,
    value: "46,328",
    title: "Clubs"
  }, {
    id: "events",
    icon: event,
    value: "828,867",
    title: "Event Bookings"
  }, {
    id: "payments",
    icon: payment,
    value: "1,926,436",
    title: "Payments"
  }
]

export const customers = [
  {
    id: "customer1",
    logo: customer1,
  }, {
    id: "customer2",
    logo: customer2,
  }, {
    id: "customer3",
    logo: customer3,
  }, {
    id: "customer4",
    logo: customer4,
  }, {
    id: "customer5",
    logo: customer5,
  }, {
    id: "customer6",
    logo: customer6,
  }
]

export const blog = [
  {
    id: "blog1",
    thumbnail: blog1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    action: "Read More",
  }, {
    id: "blog2",
    thumbnail: blog2,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    action: "Read More",
  }, {
    id: "blog3",
    thumbnail: blog3,
    title: "Revamping the Membership Model with Triathlon Australia",
    action: "Read More",
  }
]

export const socials = [
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/"
  }
  , {
    id: "twitter",
    icon: twitter,
    link: "https://twitter.com/"
  }
  , {
    id: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/"
  }
]

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        id: "about",
        title: "About Us",
        link: "#"
      }, {
        id: "blog",
        title: "Blog",
        link: "#"
      }, {
        id: "contact",
        title: "Contact Us",
        link: "#"
      }, {
        id: "pricing",
        title: "Pricing",
        link: "#"
      }, {
        id: "testimonial",
        title: "Testimonial",
        link: "#"
      }
    ]
  }, {
    title: "Support",
    links: [
      {
        id: "help-center",
        title: "Help Center",
        link: "#"
      }, {
        id: "terms-of-service",
        title: "Terms of Service",
        link: "#"
      }, {
        id: "legal",
        title: "Legal",
        link: "#"
      }, {
        id: "privacy-policy",
        title: "Privacy Policy",
        link: "#"
      }, {
        id: "status",
        title: "Status",
        link: "#"
      }
    ]
  }
]