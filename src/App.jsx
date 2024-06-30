import React from 'react'
import Cards from './Cards'

function App() {
  const mute_text = "text-muted";
  const check_icon = "fas fa-check";
  const cross_icon = "fas fa-times fa-2x fa-bold"

  let data = [
    {
      plan: "FREE",
      price: 0,
      features_available: {
        users: {
          count: "Single User",
          text_type: "",
          is_available: check_icon,
          style: ""
        },
        storage: {
          text_type: "",
          is_available: check_icon,
          space: 5
        },
        public_proj: {
          is_available: check_icon,
          text_type: "",
        },
        communtiy_acess: {
          is_available: check_icon,
          text_type: "",
        },
        private_proj: {
          is_available: cross_icon,
          text_type: mute_text,
        },
        phone_support: {
          is_available: cross_icon,
          text_type: mute_text,
        },
        subdomain: {
          is_available: cross_icon,
          text_type: mute_text,
        },
        reports: {
          is_available: cross_icon,
          text_type: mute_text,
        },

      }
    },
    {
      plan: "PLUS",
      price: 9,
      features_available: {
        users: {
          count: "5 Users",
          text_type: "fw-bold",
          is_available: check_icon,
          // style: 'fw-bold'
        },
        storage: {
          text_type: "",
          is_available: check_icon,
          space: 50
        },
        public_proj: {
          is_available: check_icon,
          text_type: "",
        },
        communtiy_acess: {
          is_available: check_icon,
          text_type: "",
        },
        private_proj: {
          is_available: check_icon,
          text_type: "",
        },
        phone_support: {
          is_available: check_icon,
          text_type: "",
        },
        subdomain: {
          is_available: check_icon,
          text_type: "",
        },
        reports: {
          is_available: cross_icon,
          text_type: mute_text,
        },

      }
    },
    {
      plan: "PRO",
      price: 49,
      features_available: {
        users: {
          count: "Unlimeted Users",
          text_type: "fw-bold",
          is_available: check_icon,
          // style: 'fw-bold'
        },
        storage: {
          text_type: "",
          is_available: check_icon,
          space: 150
        },
        public_proj: {
          is_available: check_icon,
          text_type: "",
        },
        communtiy_acess: {
          is_available: check_icon,
          text_type: "",
        },
        private_proj: {
          is_available: check_icon,
          text_type: "",
        },
        phone_support: {
          is_available: check_icon,
          text_type: "",
        },
        subdomain: {
          type:"Unlimited",
          is_available: check_icon,
          text_type: "",
          weight: "fw-bold"
        },
        reports: {
          is_available: check_icon,
          text_type: "",
        },

      }
    }
  ]

  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              data.map((e, i) => {
                console.log(e.features_available.users.text_type);
                return <Cards data={e} key={i} />
              })
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default App