# Backend (Flolytics)

![CI](https://github.com/Dtzul04/flolytics/actions/workflows/maven-java21.yml/badge.svg?branch=main)

This backend requires Java 21 (LTS).

Recommended local setup (macOS):

1. Install a JDK 21 distribution. Examples:
   - Homebrew: `brew install openjdk@21` (then follow Homebrew caveats to symlink)
   - GraalVM: download GraalVM 21 and place under `~/Library/Java/JavaVirtualMachines`

2. Set JAVA_HOME to the JDK 21 installation, for example (bash):

```bash
export JAVA_HOME=~/Library/Java/JavaVirtualMachines/graalvm-jdk-21.0.6/Contents/Home
export PATH="$JAVA_HOME/bin:$PATH"
```

3. Build and run:

```bash
cd backend
./mvnw -DskipTests package
./mvnw test
```

If you use CI (GitHub Actions), this repository includes a workflow that builds and tests using Java 21: `.github/workflows/maven-java21.yml`.
