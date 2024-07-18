import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { useHeaderHeight } from "@react-navigation/elements";
import { useQuery } from "@tanstack/react-query";
import { Currency } from "@/interfaces/crypto";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const currencies = useQuery({
    queryKey: ["listings"],
    queryFn: () => fetch("/api/listings").then((res) => res.json()),
  });

  const ids = currencies.data
    ?.map((currency: Currency) => currency.id)
    .join(", ");

  const { data } = useQuery({
    queryKey: ["info", ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View>
        {currencies.data?.map((currency: Currency) => (
          <View style={{ flexDirection: "row" }} key={currency.id}>
            <Image
              source={{ uri: data?.[currency.id].logo }}
              style={{ width: 32, height: 32 }}
            />
            <Text>{currency.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Page;
