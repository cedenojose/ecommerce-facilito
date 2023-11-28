const slugify = require('slugify');

const slugifyOptions = {
    replacement: '-',  // replace spaces with replacement character, defaults to `-`
    lower: true,      // convert to lower case, defaults to `false`
    trim: true         // trim leading and trailing replacement chars, defaults to `true`
};

// con esta funcion se busca modificar el nodo y decirle que 
// al StripeProduct que genere un nuevo campo llamado slug 
// el cual es un string obligatorio
exports.sourceNodes = ({actions}) => {
    actions.createTypes(`
        type StripeProduct implements Node {
            slug: String!
        }
    `);
};
// createResolvers indica como se van a llenar los campos
// del esquema de graphql
// en el codigo se le dice que modifique el nodo StripeProduct especificamente el campo slug
// resolve le dice que es lo que debe tener el campo
// el objeto source representa el producto con todos sus campos
exports.createResolvers = ({createResolvers}) => {
    createResolvers({
        StripeProduct: {
            slug: {
                resolve: (source) => slugify(source.name ,slugifyOptions),
            }
        }
    })
};
// crear de manera dinamica las paginas de los productos
// realiza consultas a graphql
// la funcion devuelve el resultado de la consulta a graphql
exports.createPages = async({actions, graphql}) => {
    const products = (await graphql(`
        query MyQuery {
            allStripeProduct {
                nodes {
                    id
                    name
                    slug
                }
            }
        }
    `)).data.allStripeProduct.nodes;

    // aca se crean las paginas dinamicamente
    products.forEach((product) => {
        actions.createPage({
            path: `productos/${product.slug}`,
            component: require.resolve('./src/templates/product.jsx'),
            // lo que se pasa en context gatsby lo convierte en variable graphql para la pagina creada
            context: {
                id: product.id,
            }
        })
        
    });
}