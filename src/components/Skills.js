import React from "react";
//import reactImage from '../assets/tech-logos/'

export default class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techImages: []
        };
    }

    componentDidMount() {
        const techImages = this.importAll(require.context('../assets/tech-logos', false, /\.(png|jpe?g|svg)$/));
        this.setState({ techImages });
    }

    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        console.log(this.state.techImages)
        return (
            <div className="container-skills pb-6 pt-6" style={{ backgroundColor: "#2d333b" }}>
                <div className="font-bold text-5xl text-center" style={{ color: "#00ca5a" }}>Technologies used</div>
                <div className="flex flex-wrap gap-5 justify-content-evenly mt-6 pl-8 pr-8">
                    {this.state.techImages?.map((image, index) => {
                        const match = image.match(/\/media\/([^\.]+)/);
                        return (
                            <div className="">
                                <img className="h-5rem"
                                    key={index} src={image} alt="info"
                                    title={match ? match[1] : null}
                                    loading="lazy" />
                                <div className="capitalize font-bold mt-3 text-200 text-sm" style={{
                                    letterSpacing: "0.08rem"
                                }}>{match ? match[1]?.replaceAll("-", " ") : null}</div>
                            </div>
                        )
                    }
                    )
                    }

                </div>
            </div>
        );
    }
}
