import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native';

/*

URL for IMAGE SLIDER CODE
 https://www.youtube.com/watch?v=ReAmjdNyMJA 
 */ 

const DEVICE_WIDTH = Dimensions.get("window").width;

class BackgroundCarousel extends React.Component {

    
    scrollRef = React.createRef();
    constructor(props) {

        super(props);

        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount = () => {

        setInterval(() => {
            
        this.setState(prev => ({selectedIndex: prev.selectedIndex === this.props.images.length - 1 ? 0 : prev.selectedIndex + 1}), 
        () => {

            this.scrollRef.current.scrollTo({
                animated: true,
                y: 0,
                x: DEVICE_WIDTH *  this.state.selectedIndex
            })

        })
        
        } , 3500)
        
    }
    setSelectedIndex = event => {
        // width of the viewSize 
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        // get current position in scrollView
        const contentOffset = event.nativeEvent.contentOffset.x;

        const selectedIndex = Math.floor(contentOffset/viewSize);

        this.setState({selectedIndex});
    }




    render() {
        const {images} = this.props
        const {selectedIndex} = this.state
        return(

           
      
            < View style ={{position: "absolute", bottom: 450, height: "41%", width: "100%"}}>
                    <ScrollView 
                    horizontal 
                    pagingEnabled 
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                    >
                        {images.map(image => (
                            <Image 
                            key={image}
                            source={{uri: image}}
                            style={styles.backgroundImage}
                            />

                        
                        ))}
                    </ScrollView>
                    
                    
                    <View style={styles.circleDiv}>
                        {images.map((image, i) => (
                            <View 
                            key={image}   style={[styles.whiteCircle, {opacity: i == selectedIndex ? 0.5 : 1}]} />
                        ))}
                    </View>           
           </View>
    
        );
    }


}

const styles = StyleSheet.create({
    backgroundImage: {
        height: "100%",
        width: DEVICE_WIDTH
        
   },
   circleDiv: {
    position: "absolute",
    bottom: 25,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5, 
        backgroundColor: "#fff"
    },
   
    
    
   
});


export {BackgroundCarousel};

