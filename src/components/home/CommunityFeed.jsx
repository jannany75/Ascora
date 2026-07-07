import CommunityCard from "./CommunityCard";

const journeys = [

    {
        username:"Sarah",
        journey:"Learning UI/UX",
        progress:74
    },

    {
        username:"Rahul",
        journey:"100 Days of Fitness",
        progress:41
    },

    {
        username:"Emily",
        journey:"Building My Startup",
        progress:90
    }

];

function CommunityFeed(){

    return(

        <section className="communityFeed">

            <h2>Community</h2>

            {

                journeys.map((item,index)=>(

                    <CommunityCard

                        key={index}

                        username={item.username}

                        journey={item.journey}

                        progress={item.progress}

                    />

                ))

            }

        </section>

    )

}

export default CommunityFeed;