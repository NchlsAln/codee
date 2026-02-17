"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tensorflowWorkflowTemplate = tensorflowWorkflowTemplate;
function tensorflowWorkflowTemplate() {
  return [
    "import tensorflow as tf",
    "from tensorflow import keras",
    "",
    "model = keras.Sequential([",
    "    keras.layers.Input(shape=(32,)),",
    "    keras.layers.Dense(64, activation='relu'),",
    "    keras.layers.Dense(10, activation='softmax'),",
    "])",
    "",
    "model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])",
    "",
    "x = tf.random.normal((256, 32))",
    "y = tf.random.uniform((256,), maxval=10, dtype=tf.int32)",
    "",
    "model.fit(x, y, epochs=3, batch_size=32)",
    "model.save('model.keras')",
    "",
    "reloaded = keras.models.load_model('model.keras')",
    "print(reloaded(x[:2]))",
  ].join("\n");
}
