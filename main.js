"use strict";
const container = document.querySelector('.distribution-map');
const heading = document.createElement("h2");
const btn = document.createElement("button");
const div = document.createElement("div");
const p = document.createElement("p");
const a = document.createElement("a");
const fragment = document.createDocumentFragment();

// Add locations here as needed.
const places = [{
    top: "36%",
    left: "24%",
    heading: "Illinois",
    text: "In 1971, Joy Polley, was arrested in Chicago’s South Side due to the city’s “zipper” laws, which specifically targeted trans women like Polley and made it illegal for them to leave their home in feminine clothing. Polley decided to fight and brought her case to court, helping pave the way for other cases and that eventually struck down the discriminatory city ordinance.",
    source: "https://jmellison.net/if-we-knew-trans-history/on-this-day-in-trans-history-trans-woman-joy-polley-challenges-chicagos-anti-cross-dressing-ordinance/"
  },
  {
    top: "53%",
    left: "20%",
    heading: "Mexico",
    text: "Amaranta Gómez Regalado, an activist who identifies as muxe (a Zapotec term for an individual who identifies with a gender outside of what was assigned to them at birth), ran for the México Posible party in 2003, becoming the first transgender political candidate in Mexico.",
    source: "https://es.wikipedia.org/wiki/Amaranta_G%C3%B3mez_Regalado"
  },
  {
    top: "42%",
    left: "19%",
    heading: "Colorado",
    text: "In a pivotal gay rights ruling, the U.S. Supreme Court struck down Amendment 2, Colorado’s voter-approved ballot that banned state and local laws prohibiting discrimination on the basis of sexual orientation, setting the stage for more Supreme Court reconsiderations of existing discriminatory law, including Lawrence v. Texas and Obergefell v. Hodges which recognized same-sex marriage as a fundamental right under the US Constitution.",
    source: "https://lgbtqcolorado.org/programs/colorado-lgbtq-history-project/"
  },
  {
    top: "48%",
    left: "25%",
    heading: "Florida",
    text: "During the 1970s, one of the first lesbian communities in the state was established in St. Augustine, FL. During a time when women couldn't get a mortgage or credit card without a husband to cosign, this was a little-known, yet significant moment in Northeast Florida and in womens’ and LGBTQ history.",
    source: "https://www.news-press.com/story/news/2018/03/30/womens-communities-thing-past/454507002/"
  },
  {
    top: "81%",
    left: "52%",
    heading: "South Africa",
    text: "After Apartheid, the African National Congress supported the legal recognition of same-sex marriages and its interim Constitution banned discrimination on the basis of sexual orientation. This was kept in the new Constitution (approved in 1996), which led to South Africa becoming the first country in the world to prohibit discrimination based on sexual orientation in the Constitution.",
    source: "https://en.wikipedia.org/wiki/Timeline_of_LGBT_history_in_South_Africa"
  },
  {
    top: "36%",
    left: "15%",
    heading: "Vancouver",
    text: "The first Canadian Pride Week (which included Vancouver's first Pride parade!) was held in August 1973 in the cities of Montreal, Ottawa, Saskatoon, Toronto, Vancouver, and Winnipeg. The event was intended to publicly celebrate the community and push for legislative change in Canada.",
    source: "https://en.wikipedia.org/wiki/Pride_Week_1973"
  },
  {
    top: "43%",
    left: "24%",
    heading: "Tennessee",
    text: "In 1995, the H. Franklin Brooks Philanthropic Fund was founded to \"encourage the inclusion, acceptance and recognition of Middle Tennessee’s lesbian and gay citizens\". Their latest project is an oral history collection, which includes the stories of men and women over 60 and \"what it was like to be gay in Nashville before 1970.\"",
    source: "https://www.cfmt.org/giving-and-investing/become-a-donor/give-to-a-fund/h-franklin-brooks-philanthropic-fund/"
  },
  {
    top: "41%",
    left: "26%",
    heading: "West Virginia",
    text: "In 1996, Rainbow Pride of West Virginia was founded as an all-volunteer nonprofit organization based in Charleston, providing social and educational resources to the state's LGBT community. Since then, they've hosted an annual Pride Parade & Festival each June in downtown Charleston and the Miss & Mr Pride of West Virginia Pageant.",
    source: "https://www.facebook.com/pg/RainbowPrideWV/about/?ref=page_internal"
  },
  {
    top: "39%",
    left: "27%",
    heading: "Pennsylvania",
    text: "In 1979, Mazzoni Center opened with the goal to advance the health and well-being of members of the LGBTQ community. The agency was vital during the onset of the HIV/AIDS epidemic in the US by incorporating HIV care and prevention services. It continues its work today of providing comprehensive health and wellness services to 35,000 individuals annually in the greater Philadelphia area.",
    source: "https://www.mazzonicenter.org/"
  },
  {
    top: "29%",
    left: "54%",
    heading: "Estonia",
    text: "In Estonia, the “Kooseluseadus” (called the “Registered Partnership Act” in English) came into effect on January 1st, 2016. It allows couples to register their partnership and thus have their family’s rights legally recognized and protected under the law, with no distinction between same-sex and heterosexual partnerships. It was the first such law passed in any \"post-Soviet\" country.",
    source: "https://www.riigiteataja.ee/en/eli/527112014001/consolide"
  },
  {
    top: "36%",
    left: "47%",
    heading: "France",
    text: "France became one of the first countries in the world to remove transgender identity from the list of mental disorders. In addition, a resolution was passed in 2017 that allows transgender individuals to change their legal gender without undergoing surgery or receiving any medical diagnosis.",
    source: "https://web.archive.org/web/20130910105007/http://trans.ilga.org/trans/welcome_to_the_ilga_trans_secretariat/news/france_transsexualism_will_no_longer_be_classified_as_a_mental_illness_in_france"
  },
  {
    top: "41%",
    left: "44%",
    heading: "Portugal",
    text: "Despite spending almost half of the 20th country under a fascist dictatorship, Portugal has come a long way since the ’90s. It legalized same-sex relations back in 1983, same-sex marriage in 2010, has a constitutional ban on sexual orientation discrimination and lets its citizens change their gender on all legal documents since 2011.",
    source: "https://www.expatica.com/pt/about/basics/30-facts-about-portugal-504953/"
  }
];


function addLocations() {
  for (let i = 0; i < places.length; i++) {
    let current = places[i];
    let btnClone = btn.cloneNode();
    let headingClone = heading.cloneNode();
    let pClone = p.cloneNode();
    let aClone = a.cloneNode();
    let divClone = div.cloneNode();
    let clone = div.cloneNode();
    btnClone.classList.add("map-point");
    divClone.classList.add("content");
    aClone.classList.add("source-link");
    aClone.href = current.source;
    clone.classList.add("centered-y");
    btnClone.style.top = current.top;
    btnClone.style.left = current.left;
    headingClone.appendChild(document.createTextNode(current.heading));
    pClone.appendChild(document.createTextNode(current.text));
    aClone.appendChild(document.createTextNode('(Source)'));
    clone.appendChild(headingClone);
    pClone.appendChild(aClone);
    clone.appendChild(pClone);
    divClone.appendChild(clone);
    btnClone.appendChild(divClone);
    fragment.appendChild(btnClone);
  }
  container.appendChild(fragment);
}

window.addEventListener('load', addLocations, false)
