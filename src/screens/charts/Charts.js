import React from 'react'
import { View, Dimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit"
import Text from './Text'
import styles from '../../Styles'

const Charts = (props) => {
    const { colors, dark } = useTheme()
    const { width, height } = Dimensions.get("window")
    const data = {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    }
    const chartConfig = {
        backgroundGradientFrom: "#000",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16, padding: 10
        },
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    }

    const barChartData = {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    }

    const stackedBarChartData = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2", "L3"],
        data: [
            [60, 60, 60],
            [30, 30, 60]
        ],
        barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
    }

    const pieChartData = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "rgb(0, 255, 0)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ]

    return (
        <>
            {/* <View style={[styles.flex1, styles.center]}>
                <Text style={{ color: colors.text }}>Charts</Text>
            </View> */}
            <View style={[styles.center]}>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={{
                        labels: ["Jan", "Feb", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={width - 40} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
                <LineChart
                    style={styles.graphStyle}
                    data={data}
                    width={width - 40}
                    height={220}
                    chartConfig={chartConfig}
                />
                <LineChart
                    style={styles.graphStyle}
                    data={data}
                    width={width - 40}
                    height={256}
                    verticalLabelRotation={30}
                    chartConfig={chartConfig}
                    bezier
                />

                {/* Bar charts */}
                <BarChart
                    style={styles.graphStyle}
                    data={barChartData}
                    width={width - 40}
                    height={270}
                    yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />
                <StackedBarChart
                    style={styles.graphStyle}
                    data={stackedBarChartData}
                    width={width - 40}
                    height={220}
                    chartConfig={chartConfig}
                />
                <PieChart
                    data={pieChartData}
                    width={width - 40}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    // center={[10, 10]}
                    // absolute
                />

            </View>
        </>
    )
}

export default React.memo(Charts)