      <ScrollView>
      {RenderBoard()}
      </ScrollView>
      <TouchableOpacity 
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Post")}
          style={styles.touchableOpacityStyle}>
            <View style={styles.postBtn}>
              <Text>글쓰기</Text>
            </View>
