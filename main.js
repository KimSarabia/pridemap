"use strict";
const container = document.querySelector('.distribution-map');
const heading = document.createElement("h2");
const btn = document.createElement("button");
const div = document.createElement("div");
const p = document.createElement("p");
const fragment = document.createDocumentFragment();

// Add locations here as needed.
const places = [
  {
    top: "36%",
    left: "24%",
    heading: "Illinois",
    text: "In 1971, Joy Polley, was arrested in Chicago’s South Side due to the city’s “zipper” laws, which specifically targeted trans women like Polley and made it illegal for them to leave their home in feminine clothing. Polley decided to fight and brought her case to court, helping pave the way for other cases and that eventually struck down the discriminatory city ordinance."
  },
  {
    top: "53%",
    left: "20%",
    heading: "Mexico",
    text: "Amaranta Gómez Regalado, an activist who identifies as muxe (a Zapotec term for an individual who identifies with a gender outside of what was assigned to them at birth), ran for the México Posible party in 2003, becoming the first transgender political candidate in Mexico."
  },
  {
    top: "42%",
    left: "19%",
    heading: "Colorado",
    text: "In a pivotal gay rights ruling, the U.S. Supreme Court struck down Amendment 2, Colorado’s voter-approved ballot that banned state and local laws prohibiting discrimination on the basis of sexual orientation, setting the stage for more Supreme Court reconsiderations of existing discriminatory law, including Lawrence v. Texas and Obergefell v. Hodges which recognized same-sex marriage as a fundamental right under the US Constitution."
  },
  {
    top: "48%",
    left: "25%",
    heading: "Florida",
    text: "During the 1970s, one of the first lesbian communities in the state was established in St. Augustine, FL. During a time when women couldn't get a mortgage or credit card without a husband to cosign, this was a little-known, yet significant moment in Northeast Florida and in womens’ and LGBTQ history."
  },
  {
    top: "81%",
    left: "52%",
    heading: "South Africa",
    text: "After Apartheid, the African National Congress supported the legal recognition of same-sex marriages and its interim Constitution banned discrimination on the basis of sexual orientation. This was kept in the new Constitution (approved in 1996), which led to South Africa becoming the first country in the world to prohibit discrimination based on sexual orientation in the Constitution."
  },
  {
    top: "36%",
    left: "27%",
    heading: "Canada",
    text: "The first Canadian Pride Week (which included Vancouver's first Pride parade!) was held in August 1973 in the cities of Montreal, Ottawa, Saskatoon, Toronto, Vancouver, and Winnipeg. The event was intended to publicly celebrate the community and push for legislative change in Canada."
  },
  {
    top: "41%",
    left: "27%",
    heading: "Pennsylvania",
    text: "In 1979, Mazzoni Center opened with the goal to advance the health and well-being of members of the LGBTQ community. The agency was vital during the onset of the HIV/AIDS epidemic in the US by incorporating HIV care and prevention services. It continues its work today of providing comprehensive health and wellness services to 35,000 individuals annually in the greater Philadelphia area."
  },
  {
    top: "29%",
    left: "54%",
    heading: "Estonia",
    text: "In Estonia, the “Kooseluseadus” (called the “Registered Partnership Act” in English) came into effect on January 1st, 2016. It allows couples to register their partnership and thus have their family’s rights legally recognized and protected under the law, with no distinction between same-sex and heterosexual partnerships. It was the first such law passed in any “post-Soviet” country."
  },
  {
    top: "36%",
    left: "47%",
    heading: "France",
    text: "France became one of the first countries in the world to remove transgender identity from the list of mental disorders. In addition, a resolution was passed in 2017 that allows transgender individuals to change their legal gender without undergoing surgery or receiving any medical diagnosis."
  },
  {
    top: "41%",
    left: "44%",
    heading: "Portugal",
    text: "Despite spending almost half of the 20th country under a fascist dictatorship, Portugal has come a long way since the ’90s. It legalized same-sex relations back in 1983, same-sex marriage in 2010, has a constitutional ban on sexual orientation discrimination and lets its citizens change their gender on all legal documents since 2011."
  }
];


function addLocations(){
  for (let i = 0; i < places.length; i++) {
    let current = places[i];
    let btnClone = btn.cloneNode();
    let headingClone = heading.cloneNode();
    let pClone = p.cloneNode();
    let divClone = div.cloneNode();
    let clone = div.cloneNode();
    btnClone.classList.add("map-point");
    divClone.classList.add("content");
    clone.classList.add("centered-y");
    btnClone.style.top = current.top;
    btnClone.style.left = current.left;
    headingClone.appendChild(document.createTextNode(current.heading));
    pClone.appendChild(document.createTextNode(current.text));
    clone.appendChild(headingClone);
    clone.appendChild(pClone);
    divClone.appendChild(clone);
    btnClone.appendChild(divClone);
    fragment.appendChild(btnClone);
  }
  container.appendChild(fragment);
}

window.addEventListener('load', addLocations, false )
