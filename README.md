
## React Native Skeleton Simpler
<img width="220px" align="right" src="https://github.com/EmersonGomes21/react-native-skeleton-simpler/blob/main/examples/skeleton-simpler-example.gif" />

React Native Skeleton Simpler, a simple yet fully customizable component made to achieve loading animation in a Skeleton-style. Works in both iOS and Android.

- [React Native Skeleton Simpler](#react-native-skeleton-simpler)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Examples](#examples)

### Installation

`npm install react-native-skeleton-simpler`

or

`yarn add react-native-skeleton-simpler`


### Usage

1.  Import react-native-skeleton-content:

```javascript
import {SkeletonSimpler} from 'react-native-skeleton-simpler';
```

2.  Once you create the SkeletonSimpler, you have three options:


- **Custom Layout** : You provide a prop `layout` to the component specifying the size of the bones (see the [Examples](#examples) section below). Below is an example with a custom layout.

- **Custom Layout** : You provide a prop `SkeletonComponent` recommended for complex layouts. 
  
- **Child Layout** (in Development): The component will figure out the layout of its bones with the dimensions of its direct children.  :construction:

```jsx
export default function Placeholder() {
  return (
    <SkeletonSimpler
      containerStyle={{ flex: 1, width: 300 }}
      isLoading={true}
      layout={[
        { width: 220, height: 20, marginBottom: 6 },
        {  width: 180, height: 20, marginBottom: 6 }
      ]}
    >
      <Text>Your content</Text>
      <Text>Other content</Text>
    </SkeletonSimpler>
  );
}
```

3.  Then simply sync the prop `isLoading` to your state to show/hide the SkeletonSimpler when the assets/data are available to the user.

```jsx
export default function Placeholder () {
  const [loading, setLoading] = useState(true);
  return (
    <SkeletonSimpler
       containerStyle={{flex: 1, width: 300}}
        isLoading={isLoading}>
        {...otherProps}
    />
  )
}
```

### Props

| Name               | Type             | Default                 | Description                                                                                                                       |
| ------------------ | ---------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| isLoading          | bool             | **required**            | Shows the Skeleton bones when true                                                                                                |
| layout             | array of objects | []                      | A custom layout for the Skeleton bones                                                                                            |
| duration           | number           | 1000 ms                 | Duration of one cycle of animation                                                                                                |
| containerStyle     | object           | flex: 1                 | The style applied to the View containing the bones
| SkeletonComponent  | React.JSX.Element| not required           | Custom Componente of skeleton, recommended for complex layouts.
| theme | string (light or dark) | light | Theme of SkeletonSimpler and SkeletonItem
| animatedConfig | object of Animated.TimingAnimationConfig | {toValue: 1, duration: 1000, seNativeDriver: false, delay: 800} | Configs of Animated.timing

### Examples


**1** - Customizing the layout of the bones (layout prop) :

<p align="center">
<img width="300px" src="https://github.com/EmersonGomes21/react-native-skeleton-simpler/blob/main/examples/skeleton-simpler-example.gif" />
</p>

```jsx
export default function Placeholder () {
  return (
    <SkeletonContent
        layout={[
        // long line
        { width: 220, height: 20, marginBottom: 6 },
        // short line
        { width: 180, height: 20, marginBottom: 6 },
        ...
        ]}
        isLoading={true}>
        ...
    />
  )
}
```

**2** - Customizing the layout  with props SkeletonComponent :

<p align="center">
<img width="300px" src="https://github.com/EmersonGomes21/react-native-skeleton-simpler/blob/main/examples/skeleton-simpler-example.gif" />
</p>

**2.1** import SkeletonSimpler and SkeletonItem

```javascript
import {SkeletonSimpler, SkeletonItem} from 'react-native-skeleton-simpler';
```

**2.2** Create your custom SKeleton component using SkeletonItem


```jsx
const SkeletonComponent = () => (

      <View style={{ flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                    justifyContent: 'space-between',
                }}>
                <View>
                    <SkeletonItem
                        style={[
                            styles.common,
                            {
                                width: 150,
                                height: 15,
                                borderRadius: 10,
                                marginTop: 10,
                            },
                        ]}
                    />
                    <SkeletonItem
                        style={[
                            styles.common,
                            {
                                width: 200,
                                height: 15,
                                borderRadius: 10,
                                marginTop: 10,
                            },
                        ]}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <SkeletonItem
                        style={[
                            styles.circle,
                            {marginLeft: 10, width: 40, height: 40},
                        ]}
                    />
                </View>
            </View>
) 

```

**2.3** Pass your custom component in SkeletonComponent prop

```jsx
    
    <SkeletonSimpler loading={loading} SkeletonComponent={SkeletonComponent}>
      <View>
        <Text>Your children</Text>
      </View>
    </SkeletonSimpler>

```
