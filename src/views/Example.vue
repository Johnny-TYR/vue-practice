<template>
  <Saturn>
    <Ring top></Ring>
    <Ring bottom></Ring>
    <Ring top></Ring>
    <Ring bottom></Ring>
    <Ring top></Ring>
    <Ring bottom></Ring>
    <PlanetBody top></PlanetBody>
    <PlanetBody bottom></PlanetBody>
  </Saturn>
</template>

<style lang="scss" scoped>
$size: 240px;
$rings: (
  (size: 2.5,
    border: 5px,
    color: #685B50),
  (size: 2.45,
    border: 30px,
    color: #7D6B5F),
  (size: 2.1,
    border: 70px,
    color: #8F7C6D)
);

@mixin clip ($type, $amount: 1) {
  @if $type =="top" {
    clip: rect(0,
        $size * $amount,
        $size / 2 * ($amount + .25),
        0);
  }

  @if $type =="bottom" {
    clip: rect($size / 2 * ($amount - .25),
        $size * $amount,
        $size * $amount,
        0);
  }
}


html,
body {
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2a2f38;
  transition: all 1s;
}


Saturn {
  width: $size;
  height: $size;
  position: relative;
  z-index: 1;
  transition: all 1s;

  PlanetBody,
  Ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    box-sizing: border-box;
  }

  PlanetBody {
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    background: #F7C882;

    &[top] {
      @include clip("top");
      background:
        linear-gradient(to bottom,
          #6A6357 5%,
          #99886A 6%,
          #99886A 10%,
          #CDB487 11%,
          #CDB487 13%,
          #C9A970 14%,
          #C9A970 27%,
          #C6A062 30%,
          #C6A062 35%,
          #EDC37B 38%,
          #EDC37B 50%)
    }

    &[bottom] {
      @include clip("bottom");
      background:
        linear-gradient(to top,
          #99886A 10%,
          #C9A970 14%,
          #C9A970 27%,
          #C6A062 30%,
          #C6A062 35%,
          #EDC37B 38%,
          #EDC37B 50%)
    }
  }

  Ring {
    transition: all 1s;
    transform:
      translate(-50%, -50%) rotateX(75deg);

    &[bottom] {
      z-index: 1;
    }

    $l: length($rings);

    @for $i from 1 through $l {
      $j: $i * 2 - 1;
      $ring: nth($rings, $i);
      $mass: map-get($ring, size);
      $border: map-get($ring, border);
      $color: map-get($ring, color);

      &[top]:nth-of-type(#{$j}),
      &[bottom]:nth-of-type(#{$j + 1}) {
        width: $size * $mass;
        height: $size * $mass;
        border: $border solid;
        color: $color;
      }

      &[top]:nth-of-type(#{$j}) {
        @include clip("top", $mass);
      }

      &[bottom]:nth-of-type(#{$j + 1}) {
        @include clip("bottom", $mass);
      }
    }
  }
}
</style>