package com.example.demo.Configuration;

import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.servlet.http.HttpServletResponse;

import static java.lang.String.format;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, jsr250Enabled = true, prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
    @Autowired
    AppUserService appUserService;
    @Autowired
    JwtEntryPoint jwtEntryPoint;

    @Bean
    public JwtRequestFilter jwtTokenFilter() {
        return new JwtRequestFilter();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(appUserService).passwordEncoder(passwordEncoder());
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .authorizeRequests()
                .antMatchers("/auth/**").permitAll()
                .antMatchers(HttpMethod.GET, "/productos/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/productos/**").permitAll()
                .antMatchers(HttpMethod.GET, "/categorias/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/categorias/**").permitAll()
                .antMatchers(HttpMethod.GET, "/ciudades/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/ciudades/**").permitAll()
                //.antMatchers(HttpMethod.GET, "/politicas/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/politicas/**").permitAll()
                .antMatchers(HttpMethod.GET, "/imagenes/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/imagenes/**").permitAll()
                //.antMatchers(HttpMethod.GET, "/caracteristicas/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/caracteristicas/**").permitAll()
                //.antMatchers(HttpMethod.GET, "/reservas/**").permitAll()
                //.antMatchers(HttpMethod.POST, "/reservas/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(jwtEntryPoint)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.addFilterBefore(jwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);

    }
    //cors().and().
}
