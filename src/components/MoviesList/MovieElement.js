import React, { Component } from "react";

export default class MovieElement extends Component {
    render() {
        return (
            <div className="w-25 p-3">
                <div className="card">
                    <img src="https://fr.web.img6.acsta.net/medias/05/07/12/050712_af.jpg" className="card-img-top" alt="le grinch" />
                    <div className="card-body">
                        <h5 className="card-title">Le Grinch</h5>
                        <p className="card-text">
                            L'histoire se déroule dans un flocon de neige. Le Grinch est un croque-mitaine aux poils verts qui arbore un
                            sourire élastique jusqu'aux oreilles. Misanthrope exilé, il vit depuis 53 ans dans une grotte sur le mont
                            Crumpit avec son chien Max.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
