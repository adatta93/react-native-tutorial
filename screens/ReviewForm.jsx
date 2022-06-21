import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { globalStyles } from "../Globals";
import { Formik } from "formik";
import * as yup from "yup";
import CustomButton from "../shared/Button";

const ReviewSchema = yup.object({
  title: yup
    .string()
    .required("Required, can't be empty")
    .min(2, "Min 2 characters needed"),
  body: yup
    .string()
    .required("Required, can't be empty")
    .min(2, "Min 2 characters needed")
    .max(40, "Max 40 characters needed"),
  rating: yup
    .number()
    .required("Required, can't be empty")
    .min(1, "Min Rating should be 1")
    .max(5, "Max Rating should be 5"),
});

export default function ReviewForm({ addMovie, isEnabled }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, { resetForm }) => {
          addMovie(values);
          resetForm();
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <View>
            <TextInput
              style={[globalStyles.input, isEnabled && globalStyles.darkInput]}
              placeholder="Title"
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {errors.title && touched.title ? (
              <Text style={globalStyles.errorText}>{errors.title}</Text>
            ) : null}
            <TextInput
              multiline
              numberOfLines={2}
              style={[globalStyles.input, isEnabled && globalStyles.darkInput]}
              placeholder="Body"
              onChangeText={handleChange("body")}
              onBlur={handleBlur("body")}
              value={values.body}
            />
            {errors.body && touched.body ? (
              <Text style={globalStyles.errorText}>{errors.body}</Text>
            ) : null}
            <TextInput
              style={[globalStyles.input, isEnabled && globalStyles.darkInput]}
              placeholder="Rating (1-5)"
              onChangeText={handleChange("rating")}
              onBlur={handleBlur("rating")}
              value={values.rating}
              keyboardType="numeric"
            />
            {errors.rating && touched.rating ? (
              <Text style={globalStyles.errorText}>{errors.rating}</Text>
            ) : null}
            <CustomButton text="Add" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
